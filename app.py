from flask import Flask, render_template, request, jsonify
import cv2
#import skimage.segmentation.slic as slic
import numpy as np
import pandas as pd
import pickle

app = Flask(__name__)

# Templates rendering
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/instructionpage')
def instructionpage():
    return render_template('instructionpage.html')

@app.route('/Lastpage')
def Lastpage():
    return render_template('Lastpage.html')

if __name__ == '__main__':
    app.run(debug=True)
