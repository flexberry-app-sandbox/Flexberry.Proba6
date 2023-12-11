docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba6-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba6-java/app ../../..
