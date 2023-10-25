# Product Scrap angular website

## Step 1:
```
npm install
```

## Step 2:
To Run Server
```
ng serve
```

## Step 3:
To Build
```
ng build
```

## Step 4:
To deploy
```
aws s3 sync .\dist\product-scrap\ s3://scraperwebsite
```

## Step 5:
To Check URL
http://scraperwebsite.s3-website.us-east-2.amazonaws.com