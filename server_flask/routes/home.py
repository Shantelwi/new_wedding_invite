from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return jsonify(title='Home Page', message='Welcome to our wedding website!')

if __name__ == '__main__':
    app.run(debug=True)
