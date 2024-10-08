from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/faqs', methods=['GET'])
def faqs():
    return jsonify(title='Frequently Asked Questions', message='These are answers to questions you may have.')

if __name__ == '__main__':
    app.run(debug=True)
