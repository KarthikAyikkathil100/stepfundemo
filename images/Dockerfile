FROM public.ecr.aws/lambda/nodejs:12

COPY package.json ./

COPY index.js ./
 
RUN npm i

EXPOSE 80

# You can overwrite command in `serverless.yml` template
CMD ["index.handler"]