from flask import Flask
from flask import request
from flask import jsonify
from flask.helpers import send_file
from flask.helpers import send_from_directory
import torch
import numpy as np

app = Flask(__name__, static_url_path='/', static_folder='PYTHON_PROJEKT')

@app.route("/")
def hello_world():
    return "Hello Python Projekt!"

@app.route("/index")
def indexPage():
    return send_file("frontend/index.html")
