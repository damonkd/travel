require 'uri'
require 'net/https'

url = URI("https://api.travelpayouts.com/v1/prices/cheap?origin=MOW&destination=HKT&depart_date=2017-11&return_date=2017-12")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)
request["x-access-token"] = '321d6a221f8926b5ec41ae89a3b2ae7b'

response = https.request(request)
puts response.read_body