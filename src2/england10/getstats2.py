import requests
from selenium import webdriver
driver = webdriver.Chrome()
import time
from bs4 import BeautifulSoup

counter = 0
total = 11



url = "https://www.soccerstats.com/homeaway.asp?league=england3"
data = requests.get(url,time.sleep(2))
soup = BeautifulSoup(data.content)
div = soup.find("div", id="h2h-team1")
table = div.find("table", id="btable")
f = open("england3/homeRows.txt", "w")

print(table)
counter +=1
print(str(counter) + " out of " + str(total))

url = "https://www.soccerstats.com/homeaway.asp?league=england3"
data = requests.get(url,time.sleep(2))
soup = BeautifulSoup(data.content)
div = soup.find("div", id="h2h-team2")
table = div.find("table", id="btable")

print(table)

print("Away Rows Complete")
counter +=1

print("Good To Go")



