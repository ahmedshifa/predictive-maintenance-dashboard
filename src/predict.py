import json
import joblib # type: ignore
import numpy as np

model = joblib.load('predictive_model.pkl')

# Simulate incoming data
new_data = np.random.randn(10, 3)

predictions = model.predict(new_data)

results = [{'id': i, 'status': 'FAILURE PREDICTED' if pred == 1 else 'OK'} for i, pred in enumerate(predictions)]

print(json.dumps(results))
