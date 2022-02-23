class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  filter() {
    const queryCopy = { ...this.queryStr };
    //Removing some keyword For Price Filter
    const removeFields = ["keyword"];
    removeFields.forEach((key) => delete queryCopy[key]);
    console.log(queryCopy);
    // Filter For Price and Rating
    if (this.queryStr.gte) {
      this.query = this.query
        .find(queryCopy)
        .where("price")
        .gte(queryCopy.gte)
        .lte(queryCopy.lte);
    }
    this.query = this.query.find(queryCopy);

    return this;
  }
}

export default ApiFeatures;
