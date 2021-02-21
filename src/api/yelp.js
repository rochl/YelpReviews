import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 0wJTORj-IYvEUwCsL29NlwP8fi8O9SV_DtU6Ekh8t0pueugrbr2AaDYjuZ07pi29Xv6LcYteBaoM4COn1PU4-ECOSiyO1APu5GT9_1UadnWQF-92l-a3y0ngT_EuYHYx'
  }
});
