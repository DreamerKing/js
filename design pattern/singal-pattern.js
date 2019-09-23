function Resource(){
    if(Resource.instance){
        return Resource.instance;
    } else {
        this.balance = 100;
        Resource.instance = this;
    }
}