# website
My website

docker build -t my-website .

docker run -p 80:3000 --restart unless-stopped my-website
