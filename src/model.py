import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split # type: ignore
from sklearn.ensemble import RandomForestClassifier # type: ignore
import joblib # type: ignore

# Simulated data
data = pd.DataFrame({
    'sensor1': np.random.randn(1000),
    'sensor2': np.random.randn(1000),
    'sensor3': np.random.randn(1000),
    'failure': np.random.randint(0, 2, 1000)
})

X = data[['sensor1', 'sensor2', 'sensor3']]
y = data['failure']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the model
joblib.dump(model, 'predictive_model.pkl')
