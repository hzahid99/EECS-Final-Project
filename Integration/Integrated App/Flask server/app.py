"""
This is a Flask server implementation for a parking lot car counting system. The server uses YOLOv5, a deep learning object detection model, to detect cars in images and count them. The server provides an API endpoint '/predict' that accepts a list of images and returns the total count of cars per level in the parking lot.

The server uses the following modules:

    Flask: A Python web framework for building APIs.
    glob: A module that provides a function to search for files matching a specific pattern.
    matplotlib: A module for plotting graphs and charts.
    torch: A PyTorch library for deep learning.
    numpy: A module for working with arrays and numerical operations.
    pandas: A module for working with data in tabular form.
    os: A module for interacting with the operating system.

The YOLOv5 model is loaded from a specified path and used to detect the cars in the images. The results are stored in a dictionary, where each image is associated with the count and direction of the detected cars. Finally, the server returns the total count of cars per level in the parking lot.

To run the server, execute this script using 'python script_name.py'. The server runs on localhost and listens on port 5000. The '/predict' endpoint accepts POST requests with a list of images as the request body. The images should be in JPEG format and stored on the server in the 'images' directory.

This implementation can be improved further by adding error handling, improving the readability of the code, and using configuration files to store environment-specific variables.
"""
/*
Author: Bikash, Rudro
Date: 4/1/2023
Revision date: 4/9/2023
File name: app.py

*/

#importing libraries
from flask import Flask, jsonify
import glob as glob
import matplotlib.pyplot as plt
import torch
import numpy as np
import pandas as pd
import os

os.environ['KMP_DUPLICATE_LIB_OK']='True'

# Create flask app
app = Flask(__name__)

# Add app routes
@app.route('/')
# Create server response
def index():
    return "Hi"


@app.route('/predict')
def predict():
    
    total_cars_per_level = 0
    
    # loading the custom YoloV5 model using TorchHub
    model_yolo = torch.hub.load(".", 'custom', path="/Users/home/Downloads/parking-ku/Flask server/Weights/best_100.pt", source='local', force_reload=True)
    
    detected_cars = {}

    images_dir = "/Users/home/Downloads/parking-ku/Flask server/images"
    
    # loop through the images for the detection of front and back
    for filename in os.listdir(images_dir):
        if filename.endswith(".jpg"):
            img_path = os.path.join(images_dir, filename)
            results = model_yolo(img_path)
            detected_objects = results.pandas().xyxy[0].value_counts('name').to_dict()
            if "front" in detected_objects:
                front_count = detected_objects.get('front', 0)
                detected_cars[filename] = {
                    "direction": "entering",
                    "count": front_count
                }
                total_cars_per_level += front_count
            elif "back" in detected_objects:
                back_count = detected_objects.get('back', 0)
                detected_cars[filename] = {
                    "direction": "exiting",
                    "count": back_count
                }
                total_cars_per_level -= back_count
            else:
                detected_cars[filename] = {
                    "direction": "unknown",
                    "count": 0
                }
                total_cars_per_level+=0
    
    return jsonify({"total_cars_per_level": total_cars_per_level})

if __name__ == "__main__":
    app.run(debug=True)
