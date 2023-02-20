<template>
    <div><table class="table text-light">
    <thead>
      <tr>
        <th scope="col">Time</th>
        <th scope="col">Quantity</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  </div>
  </template>
  <script>
  export default {
      name: "TableWithdraw",
      data(){
        return {
          Time: {},
          Quantity:{},
          Status:{}
    };


      }
  }
  </script>