from flask import Flask, request, jsonify
from model import check

app = Flask(__name__)

@app.route("/check", methods=["POST"])
def predict():
    event = request.json["event"]
    result = check(event)
    return jsonify({"result": result})

app.run(host="0.0.0.0", port=5001)
