from langchain_core.output_parsers import StrOutputParser
from langchain_community.document_loaders import PyPDFLoader
from langchain_groq import ChatGroq
from langchain.prompts import PromptTemplate 

from langchain.schema import Document
from langchain_community.vectorstores import DocArrayInMemorySearch
from langchain_huggingface import HuggingFaceEmbeddings

from operator import itemgetter

embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
parser=StrOutputParser()

# load_dotenv()
groq_api_key = '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'
model = 'llama3-8b-8192'
# Initialize Groq Langchain chat object and conversation
groq_chat = ChatGroq(
        groq_api_key=groq_api_key,
        model_name=model
)



def load_model_chatbot_diabetes():
    """
    Loads the RAG model based on the notebook logic.
    This could involve loading an LLM, vector store, or any chain structure.

    Returns:
        model: The loaded RAG model or chain object.
    """
    try:
        loader=PyPDFLoader("diabetes.pdf")
        pages=loader.load_and_split()
        # pages
        # Load language model (e.g., an LLM from langchain)
        template="""Answer the question from the context below. If you cant find the answer,reply IDK

        Context={context}
        Question={question}

        """
        prompt=PromptTemplate.from_template(template=template)
        prompt.format(context="Here is the context",question="Here is the task")
        vector_store=DocArrayInMemorySearch.from_documents(
            pages,
            embedding=embeddings
        )

        print("Model and vector store successfully loaded d.")
        return (vector_store, prompt)  # Adjust return value as needed
    except Exception as e:
        print(f"Error loading model: {e}")
        raise e


def load_model_chatbot_heart():
    """
    Loads the RAG model based on the notebook logic.
    This could involve loading an LLM, vector store, or any chain structure.

    Returns:
        model: The loaded RAG model or chain object.
    """
    try:
        loader=PyPDFLoader("heart.pdf")
        pages=loader.load_and_split()
        # pages
        # Load language model (e.g., an LLM from langchain)
        template="""Answer the question from the context below. If you cant find the answer,reply IDK

        Context={context}
        Question={question}

        """
        prompt=PromptTemplate.from_template(template=template)
        prompt.format(context="Here is the context",question="Here is the task")
        vector_store=DocArrayInMemorySearch.from_documents(
            pages,
            embedding=embeddings
        )

        print("Model and vector store successfully loaded.")
        return (vector_store, prompt)  # Adjust return value as needed
    except Exception as e:
        print(f"Error loading model: {e}")
        raise e


def load_model_chatbot_monkey():
    """
    Loads the RAG model based on the notebook logic.
    This could involve loading an LLM, vector store, or any chain structure.

    Returns:
        model: The loaded RAG model or chain object.
    """
    try:
        loader=PyPDFLoader("monkeypox.pdf")
        pages=loader.load_and_split()
        # pages
        # Load language model (e.g., an LLM from langchain)
        template="""Answer the question from the context below. If you cant find the answer,reply IDK

        Context={context}
        Question={question}

        """
        prompt=PromptTemplate.from_template(template=template)
        prompt.format(context="Here is the context",question="Here is the task")
        vector_store=DocArrayInMemorySearch.from_documents(
            pages,
            embedding=embeddings
        )

        print("Model and vector store successfully loaded.")
        return (vector_store, prompt)  # Adjust return value as needed
    except Exception as e:
        print(f"Error loading model: {e}")
        raise e


def query_model(components, question):
    """
    Takes the loaded RAG components and a user question, and returns a generated response.

    Args:
        components: Tuple containing loaded model, vector store, etc.
        question (str): User's input question.

    Returns:
        response (str): The generated answer to the question.
    """
    try:
        vector_store, prompt = components

        retreiver=vector_store.as_retriever() # Retrieve relevant documents

        chain=(
            {"context":itemgetter('question') | retreiver ,
            "question":itemgetter('question')} | prompt | groq_chat | parser
        )
        response = chain.invoke({"question": question})
  # Generate a response based on the docs
        return response
        # return chain.invoke({f"question":{question}})
    except Exception as e:
        print(f"Error generating response: {e}")
        raise e