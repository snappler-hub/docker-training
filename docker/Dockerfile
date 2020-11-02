FROM ruby:2.7.1

RUN mkdir -p /app
WORKDIR /app

COPY . ./

RUN gem install bundler:2.1.4 && bundler install

EXPOSE 9293

CMD ["rackup", "-p", "9293"]


