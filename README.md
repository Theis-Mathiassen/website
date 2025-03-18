# website
My website

docker build -t my-website .

docker run -d -p 80:3000 --restart unless-stopped my-website
