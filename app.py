from flask import Flask, request, jsonify, render_template
import numpy as np
import pickle

# Load the model
model = pickle.load(open('model.pkl', 'rb'))

app = Flask(__name__)

@app.route('/')
def index():
    return "Welcome to Cropredict"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the JSON data from the request
        data = request.get_json(force=True)
        
        # Extract features from the JSON data
        N = data.get('Nitrogen')
        P = data.get('Phosporus')
        K = data.get('Potassium')
        temp = data.get('Temperature')
        humidity = data.get('Humidity')
        ph = data.get('pH')
        rainfall = data.get('Rainfall')

        # Create a feature list and convert it to a numpy array
        feature_list = [N, P, K, temp, humidity, ph, rainfall]
        single_pred = np.array(feature_list).reshape(1, -1)

        # Make the prediction
        prediction = model.predict(single_pred)

        # Mapping of prediction to crop names
        crop_dict = {1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
                     8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
                     14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
                     19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}

        if prediction[0] in crop_dict:
            crop = crop_dict[prediction[0]]
            result = "{} is the best crop to be cultivated right there".format(crop)
        else:
            result = "Sorry, we could not determine the best crop to be cultivated with the provided data."
        
        # Return the result as a JSON response
        return jsonify({"result": result})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
