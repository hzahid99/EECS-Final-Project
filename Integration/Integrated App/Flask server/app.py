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
    total_cars_per_level = 50

    model_yolo = torch.hub.load(".", 'custom', path="/Users/home/Downloads/parking-ku/Flask server/Weights/best_100.pt", source='local', force_reload=True)
    # img = '/Users/home/Downloads/parking-ku/Flask server/images/back.jpg'
    detected_cars = {}

    images_dir = "/Users/home/Downloads/parking-ku/Flask server/images"

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
