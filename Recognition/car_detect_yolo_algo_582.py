# -*- coding: utf-8 -*-
"""car_detect_yolo_algo_1/24.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1vr_kuRjdqKKf1rq-_Y28W6JE3swjuFLN

# Yolo dependency
"""

# Author : Rudro, RokunuzJahan 
# Date : 11-6-2022
# Last edited : 2/07/2023
# Filename: car_detect_yolo_algo

# This code is a backbone and our initial idea of detecting the car body and the car orientation
# We have been previously able to detect the car, this time we went ahead with the car orientation detection
# Moreover, we went ahead and started setting our reolink camera
# We have been able to grab video from the camera and download it for running the model on it, however the nighttime video feed made it difficult for the model to work
# and we had technical difficulties with setting up the camera - no long ethernet cables, managing router for the camera

# Install dependencies as necessary
!pip install -qr https://raw.githubusercontent.com/ultralytics/yolov5/master/requirements.txt
!git clone https://github.com/ultralytics/yolov5  # clone repo
!pip install -q roboflow

"""# Imports"""

# Commented out IPython magic to ensure Python compatibility.
# %cd /content/yolov5
# %cd ..
# %ls

# required import of libraries for the marking/detection of the object
import os
import glob as glob
import matplotlib.pyplot as plt
import cv2
import requests
import torch

from IPython.display import Image, clear_output  # to display images
print('Setup complete. Using torch %s %s' % (torch.__version__, torch.cuda.get_device_properties(0) if torch.cuda.is_available() else 'CPU'))

from google.colab import drive
drive.mount('/content/drive')

# Commented out IPython magic to ensure Python compatibility.
# %cd /content/yolov5

from roboflow import Roboflow

# this is from the roboflow public dataset - they have all sort of datasets to work with Yolov5
# so we went with it to make our work easier
rf = Roboflow(api_key="iq9O2jVL4DCXGhvxCASc")
project = rf.workspace("wong-l7j5n").project("direction-of-the-vehicle-e6rhj")
dataset = project.version(1).download("yolov5")

# rf = Roboflow(api_key="iq9O2jVL4DCXGhvxCASc")
# project = rf.workspace("university-of-kansas").project("581-park")
# dataset = project.version(3).download("yolov5")

# Commented out IPython magic to ensure Python compatibility.
# this is the YAML file Roboflow wrote for us that we're loading into this notebook with our data
# %cat {dataset.location}/data.yaml

# define number of classes based on YAML
import yaml
with open(dataset.location + "/data.yaml", 'r') as stream:
    num_classes = str(yaml.safe_load(stream)['nc'])
num_classes

# Commented out IPython magic to ensure Python compatibility.
#this is the model configuration we will use
# %cat /content/yolov5/models/yolov5n.yaml

#customize iPython writefile so we can write variables
from IPython.core.magic import register_line_cell_magic

@register_line_cell_magic
def writetemplate(line, cell):
    with open(line, 'w') as f:
        f.write(cell.format(**globals()))

# Commented out IPython magic to ensure Python compatibility.
# # train yolov5s on custom data for 100 epochs
# # time its performance
# %%time
# %cd /content/yolov5/
# !python train.py --img 416 --batch 20 --epochs 100 --data {dataset.location}/data.yaml --cfg ./models/yolov5n.yaml --weights '' --name yolov5n_results  --cache

# Commented out IPython magic to ensure Python compatibility.
# Start tensorboard
# Launch after you have started training
# logs save in the folder "runs"
# %load_ext tensorboard
# %tensorboard --logdir runs
# %reload_ext tensorboard
# !kill 529

# Commented out IPython magic to ensure Python compatibility.
# %cd /content/yolov5/runs/train/yolov5s_results/weights/
# %cd ..
# %cd ..
# %cd ..
# %cd ..

# !python detect.py --weights /content/yolov5/runs/train/yolov5s_results/weights/best.pt --img 640 --conf 0.4 --source /content/drive/MyDrive/test2.mp4 --save-txt --visualize --class 2

# Run evaluation
# the conf is low otherwise the cars are not being detected
# Also, the video file matters a lot - our test2 video is a bit shaky which made the detection very inaccurate
# Moreover, the cars have to be close within a frame range for better detection purposes
# This was just to see if we could collect a video from the camera and run yolo model on it

# we haven't been able to take the camera outside due to the lack of power source for the camera
# instead just recorded a video inside engineering
# in the generated video, there are some instances of detections but that's only when the camera is being moved and shaken
!python detect.py --weights /content/yolov5/runs/train/yolov5s_results/weights/best.pt --img 640 --conf 0.4 --source /content/drive/MyDrive/Test1-135027-135135.mp4

!python detect.py --weights /content/yolov5/runs/train/yolov5s_results/weights/best.pt --img 640 --conf 0.4 --source 'https://www.youtube.com/watch?v=ehBeu7A0atI&ab_channel=RazvanTudoran'