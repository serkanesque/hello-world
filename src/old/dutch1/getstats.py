import requests
from selenium import webdriver
driver = webdriver.Chrome()
import time
from bs4 import BeautifulSoup

counter = 0
total = 11
url = "https://www.soccerstats.com/halftime.asp?league=netherlands"
driver.get(url)
soup = BeautifulSoup(driver.page_source)
div = soup.find_all("div", class_="tabberlive")
table = div[3].find_all("table")
f = open("halfTimeAwayTrailing.txt", "w")
f.write(str(table[2]))
f.close()
print("Half Time Away Trailing Complete")
counter +=1
print(str(counter) + " out of " + str(total))

time.sleep(1)
url = "https://www.soccerstats.com/halftime.asp?league=netherlands"
driver.get(url)
soup = BeautifulSoup(driver.page_source)
div = soup.find_all("div", class_="tabberlive")
table = div[3].find_all("table")
f = open("halfTimeHomeTrailing.txt", "w")
f.write(str(table[1]))
f.close()
print("Half Time Home Trailing Complete")
counter +=1
print(str(counter) + " out of " + str(total))

time.sleep(1)
url = "https://www.soccerstats.com/halftime.asp?league=netherlands"
driver.get(url)
soup = BeautifulSoup(driver.page_source)
div = soup.find_all("div", class_="tabberlive")
table = div[2].find_all("table")
f = open("halfTimeHomeLeading.txt", "w")
f.write(str(table[1]))
f.close()
print("Half Time Home Leading Complete")
counter +=1
print(str(counter) + " out of " + str(total))

time.sleep(1)
url = "https://www.soccerstats.com/halftime.asp?league=netherlands"
driver.get(url)
soup = BeautifulSoup(driver.page_source)
div = soup.find_all("div", class_="tabberlive")
table = div[2].find_all("table")
f = open("halfTimeAwayLeading.txt", "w")
f.write(str(table[2]))
f.close()
print("Half Time Away Leading Complete")
counter +=1
print(str(counter) + " out of " + str(total))

url = "https://www.soccerstats.com/timing.asp?league=netherlands"
time.sleep(1)
driver.get(url)
soup = BeautifulSoup(driver.page_source)
div = soup.find_all("div", class_="tabberlive")
table = div[0].find_all("table")
f = open("homeGoals.txt", "w")
f.write(str(table[1]))
f.close()
print("Home Goals Complete")
counter +=1
print(str(counter) + " out of " + str(total))

url = "https://www.soccerstats.com/timing.asp?league=netherlands"
time.sleep(1)
driver.get(url)
soup = BeautifulSoup(driver.page_source)
div = soup.find_all("div", class_="tabberlive")
table = div[0].find_all("table")
driver.quit()
f = open("awayGoals.txt", "w")
f.write(str(table[2]))
f.close()
counter +=1
print(str(counter) + " out of " + str(total))

url = "https://www.soccerstats.com/homeaway.asp?league=netherlands"
data = requests.get(url,time.sleep(1))
soup = BeautifulSoup(data.content)
div = soup.find("div", id="h2h-team1")
table = div.find("table", id="btable")
f = open("homeRows.txt", "w")
f.write(str(table))
f.close()
print("Home Rows Complete")
counter +=1
print(str(counter) + " out of " + str(total))

url = "https://www.soccerstats.com/homeaway.asp?league=netherlands"
data = requests.get(url,time.sleep(1))
soup = BeautifulSoup(data.content)
div = soup.find("div", id="h2h-team2")
table = div.find("table", id="btable")
f = open("awayRows.txt", "w")
f.write(str(table))
f.close()
print("Away Rows Complete")
counter +=1
print(str(counter) + " out of " + str(total))

url = "https://www.soccerstats.com/results.asp?league=netherlands&pmtype=bygameweek"
data = requests.get(url,time.sleep(1))
soup = BeautifulSoup(data.content)
soup.encode(formatter=None)
div = soup.find("div", class_="tabbertabdefault")
table = div.find("table", id="btable")
f = open("fixtures.txt", "w")
f.write(str(table))
f.close()
print("Fixtures Complete")
counter +=1
print(str(counter) + " out of " + str(total))

url = "https://www.soccerstats.com/results.asp?league=netherlands&pmtype=bydate"
data = requests.get(url,time.sleep(1))
soup = BeautifulSoup(data.content)
div = soup.find_all("table", id="btable")
f = open("seasonFixtures.txt", "w")
f.write(str(div[0]))
f.close()
print("Season Fixtures Complete")
counter +=1
print(str(counter) + " out of " + str(total))

url = "https://www.soccerstats.com/results.asp?league=netherlands_2019&pmtype=bydate"
data = requests.get(url,time.sleep(1))
soup = BeautifulSoup(data.content)
div = soup.find("div", class_="six columns")
table = soup.find("table", id="btable")
f = open("seasonFixtures2018.txt", "w")
f.write(str(table))
f.close()
print("Season 2018 Results Complete")
counter +=1

print(str(counter) + " out of " + str(total))





print("Good To Go")
driver.quit()

