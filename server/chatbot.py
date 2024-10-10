from flask import Flask, request, jsonify
import langchain  
import json
from flask_cors import CORS

# Assuming the components from your notebook are required
from rag_context_components import load_model_chatbot_diabetes, load_model_chatbot_heart, load_model_chatbot_monkey, query_model  # Custom functions

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)  # Enable CORS

try:
    # Load the RAG model or the chain
    print("Loading diabetes model...")
    diabetesModel = load_model_chatbot_diabetes()  # Custom function to load model from your notebook
    print("Diabetes model loaded successfully.")
except Exception as e:
    print(f"Failed to load diabetes model: {e}")

try:
    print("Loading heart model...")
    heartModel = load_model_chatbot_heart()  # Custom function to load model from your notebook
    print("Heart model loaded successfullyh.")
except Exception as e:
    print(f"Failed to load heart model: {e}")

try:
    print("Loading monkey model...")
    monkeyModel = load_model_chatbot_monkey()  # Custom function to load model from your notebook
    print("Monkey model loaded successfully.")
except Exception as e:
    print(f"Failed to load Monkey model: {e}")

@app.route('/api/diabetesChatbot', methods=['POST'])
def query_diabetes():
    try:
        # Get question from request data
        data = request.get_json()
        question = data.get('question', '')
        
        if not question:
            return jsonify({'error': 'No question provided'}), 400

        # Use the model to generate a response (This could depend on your notebook logic)
        response = query_model(diabetesModel, question)  # Assuming the model is queried via this function

        # Send response back to the frontend
        return jsonify({'response': response}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/heartChatbot', methods=['POST'])
def query_heart():
    try:
        # Get question from request data
        data = request.get_json()
        question = data.get('question', '')
        
        if not question:
            return jsonify({'error': 'No question provided'}), 400

        # Use the model to generate a response (This could depend on your notebook logic)
        response = query_model(heartModel, question)  # Assuming the model is queried via this function

        # Send response back to the frontend
        return jsonify({'response': response}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/monkeyBot', methods=['POST'])
def query_monkey():
    try:
        # Get question from request data
        data = request.get_json()
        question = data.get('question', '')
        
        if not question:
            return jsonify({'error': 'No question provided'}), 400

        # Use the model to generate a response (This could depend on your notebook logic)
        response = query_model(monkeyModel, question)  # Assuming the model is queried via this function

        # Send response back to the frontend
        return jsonify({'response': response}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5174)