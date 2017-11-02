/**
 * TestAPI.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	  
    name: {
    	required:true,
    type:'STRING'
    },
    family: {
    	required:true,
    type:'STRING'
    },
    continents:{
    	required:true,
    type:'STRING'
    },
    added:{
    	required:true,
    type: 'STRING'
    },
    visible:{
    	required:true,
    type:'STRING'
    },
    createdAt:{
    	required:true,
    type:'STRING'
   },
    updatedAt:{
    	required:true,
    type:'STRING'
   }

  }
};

