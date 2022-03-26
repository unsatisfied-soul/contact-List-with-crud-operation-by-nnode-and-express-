const contacts = require('./contacts')
const fs = require('fs')

exports.getContact=(req,res)=> {
    const fileData = JSON.parse(fs.readFileSync('contactData.json'))
    res.json(fileData)
}

exports.createContact=(req,res)=> {
    let {name,number}= req.body 
    let contact =contacts.push(
        {
            name,
            number,
            id: contacts.length+1
        }
    )
    
    res.json(contact)
    fs.writeFile('contactData.json', JSON.stringify(contacts, null, 2), function(err, result) {
        if(err) console.log('error', err);
      });
      
      const fileData = JSON.parse(fs.readFileSync('contactData.json'))
      fileData.push( {
        name,
        number,
        id: fileData.length+1
    })
      fs.writeFile('contactData.json', JSON.stringify(fileData, null, 2), function(err, result) {
        if(err) console.log('error', err);
      });
}

exports.getSingleContact=(req,res)=> {
  let {id} = req.params
  id= parseInt(id)
  let contact = JSON.parse(fs.readFileSync('contactData.json')).filter(singleid=> singleid.id===id)
  res.json(contact)
}

exports.updateContact=(req,res)=> {
  let {id} = req.params
  id= parseInt(id)

  let {name,number}= req.body
  let contact = JSON.parse(fs.readFileSync('contactData.json')).find(singleid=> singleid.id===id)
  contact.name = name
  contact.number = number
  fs.rename
  console.log(contact)
  res.json(contact)
}

exports.deleteContact=(req,res)=> {
  let {id} = req.params
  id= parseInt(id)
  let contact = JSON.parse(fs.readFileSync('contactData.json')).filter(singleid=> singleid.id==id)
  
  if (contact.id > -1) {
    JSON.parse(fs.readFileSync('contactData.json')).slice(contact);
  }
  console.log(JSON.parse(fs.readFileSync('contactData.json')))
 
  res.json(contact)
}