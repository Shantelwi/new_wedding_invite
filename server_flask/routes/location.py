from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/location', methods=['GET'])
def location():
    return jsonify(title='Location', message='Find information about the location here.')

if __name__ == '__main__':
    app.run(debug=True)
