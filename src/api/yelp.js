import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer E3xaQg1HezmrDp_f7zUaESmcHFUHNCaP3_YXTF9l1L9xQ9VI4sxwVK9JDIKWgBWghSOb7BkcICWItcqc-h2hbi_RHQSNQUZwrAPf0nhVnqwL-q-12khpz2qohRjlXnYx',
  },
});

// yelp.get('/search')
