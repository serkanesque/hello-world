import requests
from selenium import webdriver
driver = webdriver.Chrome()
import time
from bs4 import BeautifulSoup

counter = 0
total = 11


url = "https://www.soccerstats.com/homeaway.asp?league=colombia"
data = requests.get(url,time.sleep(2))
soup = BeautifulSoup(data.content)
div = soup.find("div", id="h2h-team1")
table = div.find("table", id="btable")
f = open("colombia1/homeRows.txt", "w")
f.write(str(table))
f.close()
print("Home Rows Complete")
counter +=1
print(str(counter) + " out of " + str(total))

url = "https://www.soccerstats.com/homeaway.asp?league=colombia"
data = requests.get(url,time.sleep(2))
soup = BeautifulSoup(data.content)
div = soup.find("div", id="h2h-team2")
table = div.find("table", id="btable")
f = open("colombia1/awayRows.txt", "w")
f.write(str(table))
f.close()
print("Away Rows Complete")
counter +=1
print(str(counter) + " out of " + str(total))

url = "https://www.soccerstats.com/results.asp?league=colombia&pmtype=bygameweek"
data = requests.get(url,time.sleep(2))
soup = BeautifulSoup(data.content)
soup.encode(formatter=None)
div = soup.find("div", class_="tabbertabdefault")
table = div.find("table", id="btable")
f = open("colombia1/fixtures.txt", "w")
f.write(str(table))
f.close()
print("Fixtures Complete")
counter +=1
print(str(counter) + " out of " + str(total))

url = "https://www.soccerstats.com/results.asp?league=colombia&pmtype=bydate"
data = requests.get(url,time.sleep(2))
soup = BeautifulSoup(data.content)
div = soup.find_all("table", id="btable")
f = open("colombia1/seasonFixtures.txt", "w")
f.write(str(div[0]))
f.close()
print("Season Fixtures Complete")
counter +=1
print(str(counter) + " out of " + str(total))



print("Good To Go")




driver.quit()


