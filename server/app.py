
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle
import warnings
from PIL import Image
import os
import tensorflow as tf
import cv2

# Suppress specific warnings
warnings.filterwarnings("ignore", category=UserWarning)

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Enable CORS

# Load the model - diabetes
diabetesModel = pickle.load(open('svc_diabetes_model.pkl', 'rb'))

# Load the model - heart
heartModel = pickle.load(open('rf_heart_model.pkl', 'rb'))

# Load the model - monkey
monkeyModel = tf.keras.models.load_model('my_monkeypox_model.h5')

def predict_diabetes(input_data):
    input_data = np.array([list(map(float, input_data))])
    if input_data.shape[1] != 16:
        raise ValueError(f"Expected 16 features, but got {input_data.shape[1]}")
    prediction = diabetesModel.predict(input_data)
    return 'No diabetes disease' if prediction[0] == 0 else 'Diabetes disease'

def predict_heart_disease(input_data):
    input_data = np.array([list(map(float, input_data))])
    if input_data.shape[1] != 15:
        raise ValueError(f"Expected 15 features, but got {input_data.shape[1]}")
    prediction = heartModel.predict(input_data)
    return 'No heart disease' if prediction[0] == 0 else 'Heart disease'

def predict_monkeypox(image_path):
    image = cv2.imread(image_path)
    image_from_array = Image.fromarray(image, 'RGB')
    size_image = image_from_array.resize((224, 224))
    image_array = np.array(size_image).astype('float32') / 255
    image_array = image_array.reshape(1, 224, 224, 3)
    prediction = monkeyModel.predict(image_array)
    predicted_class_index = np.argmax(prediction)
    m_labels = ['MonkeyPox', 'No MonkeyPox']
    return m_labels[predicted_class_index]

@app.route('/api/predictDiabetes', methods=['POST'])
def predict_diabetes_route():
    data = request.json
    required_fields = [
        'age', 'gender', 'polyuria', 'polydipsia', 'suddenWeightLoss', 'weakness',
        'polyphagia', 'genitalThrush', 'visualBlurring', 'itching', 'irritability',
        'delayedHealing', 'partialParesis', 'muscleStiffness', 'alopecia', 'obesity'
    ]
    if not all(field in data for field in required_fields):
        return jsonify({'success': False, 'message': 'All fields are required'}), 400

    input_data = [
        data['age'], data['gender'], data['polyuria'], data['polydipsia'], data['suddenWeightLoss'],
        data['weakness'], data['polyphagia'], data['genitalThrush'], data['visualBlurring'],
        data['itching'], data['irritability'], data['delayedHealing'], data['partialParesis'],
        data['muscleStiffness'], data['alopecia'], data['obesity']
    ]

    try:
        prediction = predict_diabetes(input_data)
        
        return jsonify({'success': True, 'prediction': prediction})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500


@app.route('/api/predictHeart', methods=['POST'])
def predict_heart_route():
    data = request.json
    required_fields = [
        'age', 'resting_blood_pressure', 'cholesterol', 'fasting_blood_sugar',
        'max_heart_rate_achieved', 'exercise_induced_angina', 'st_depression',
        'sex_male', 'chest_pain_type_atypical_angina', 'chest_pain_type_non_anginal_pain',
        'chest_pain_type_typical_angina', 'rest_ecg_left_ventricular_hypertrophy',
        'rest_ecg_normal', 'st_slope_flat', 'st_slope_upsloping'
    ]
    if not all(field in data for field in required_fields):
        return jsonify({'success': False, 'message': 'All fields are required'}), 400

    input_data = [
        data['age'], data['resting_blood_pressure'], data['cholesterol'], data['fasting_blood_sugar'],
        data['max_heart_rate_achieved'], data['exercise_induced_angina'], data['st_depression'],
        data['sex_male'], data['chest_pain_type_atypical_angina'], data['chest_pain_type_non_anginal_pain'],
        data['chest_pain_type_typical_angina'], data['rest_ecg_left_ventricular_hypertrophy'],
        data['rest_ecg_normal'], data['st_slope_flat'], data['st_slope_upsloping']
    ]

    try:
        prediction = predict_heart_disease(input_data)
        return jsonify({'success': True, 'prediction': prediction})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500
    
@app.route('/api/predictMonkey', methods=['POST'])
def predict_monkey_route():
    if 'photo' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['photo']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    # Ensure the temp directory exists
    temp_dir = './temp'
    if not os.path.exists(temp_dir):
        os.makedirs(temp_dir)
    
    file_path = os.path.join(temp_dir, file.filename)
    file.save(file_path)
    prediction = predict_monkeypox(file_path)
    os.remove(file_path)  # Clean up the temp file
    return jsonify({'prediction': prediction})
    

if __name__ == '__main__':
    app.run(debug=True)