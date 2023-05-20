import matplotlib.pyplot as plt
import numpy as np
from sklearn.linear_model import LinearRegression

# 三次関数のグラフを描画
x = np.arange(-10, 12, 2)
def f(x):
    return x**3 + 2*x**2 + 3*x + 4

def F(x):
    return x**3 - 1*x**2 + 10*x + -3

np.random.seed(0)

X = np.arange(-10, 10, 0.25)
Y = F(X)

# 直線を求める
model = LinearRegression()
data_X = np.concatenate((X.reshape(-1, 1), x.reshape(-1, 1)))
data_Y = f(data_X[:, 0])  # Xのサンプル数に合わせてdata_Yを生成する

model.fit(data_X, data_Y)

plt.plot(X, Y)

plt.scatter(np.random.uniform(-10, 11, 25), np.random.uniform(-500, 800, 25), color="red")
plt.scatter(x, f(x), color="red")

# 回帰直線を描画
regression_line = model.intercept_ + model.coef_[0] * X
plt.plot(X, regression_line)

# 調整
#　追加
plt.scatter([-10,10.5,-9,-8],[-1020,900,-1000,-850],color="red")
#削除
plt.scatter([-8.59,-9.6,-8.2,-1.9,-0.34],[396,62,30,-480,-340],color="white", s=500)

plt.show()
