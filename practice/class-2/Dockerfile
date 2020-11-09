FROM ruby:2.7.1

RUN apt-get update && apt-get install -y dnsutils

RUN mkdir -p /app
WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN gem install bundler:2.1.4 && bundler install

COPY . ./

EXPOSE 9292

CMD ["rackup", "--host", "0.0.0.0"]


