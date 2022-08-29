# personal-vm-nginx

## Docker Command

1. Build the Image
```
docker build -t nginx-image .
```

2. Build the container
```
    docker run --name nginx-container -d -p 80:80 nginx-image
```