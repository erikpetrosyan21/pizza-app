<template>
  <el-transfer @change="sendTransValue" filterable filter-placeholder="State Abbreviations" v-model="value" :data="data">
      
  </el-transfer>
</template>

<script>
import io from "socket.io-client";

export default {
  data() {
    const generateData = () => {
      const data = [];
      const states = [
        "California",
        "Illinois",
        "Maryland",
        "Texas",
        "Florida",
        "Colorado",
        "Connecticut "
      ];
      const initials = ["CA", "IL", "MD", "TX", "FL", "CO", "CT"];
      states.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          initial: initials[index]
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [],
      socket: io("http://10.33.40.71:3000"),
      filterMethod(query, item) {
        return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
      }
    };
  },
  methods:{
      sendTransValue(){
          this.socket.emit("transferValue", this.value);
          console.log('a');
      }
  },
  mounted(){
      // NOT WORKING !!!
      this.socket.on('aaaa',(transValue)=>{
          console.log(transValue)
      });
  }
};
</script>