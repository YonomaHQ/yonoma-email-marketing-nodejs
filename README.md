## [Yonoma](https://yonoma.io/) Node.js Email Marketing SDK
### Install
```bash
npm install @yonoma/yonoma_email_marketing
```
### Setup
First, you need to get an API key:
```javascript
import Yonoma from "@yonoma/yonoma_email_marketing";

const yonoma = new Yonoma("YOUR_API_KEY");
```
### Usage
#### Send your email:
```javascript
await yonoma.email.send({
  from_email: 'email@example.com',
  to_email: 'to@example.com',
  subject: 'From Yonoma.io',
  mail_template: 'Everything is working',
});
```
## Groups
#### Create new group
```javascript
await yonoma.groups.create({ group_name: "New group" });
```
#### Get list of groups
```javascript
await yonoma.groups.list();
```
#### Get one group
```javascript
await yonoma.groups.retrieve("Group id");
```
#### Update group
```javascript
await yonoma.groups.update("Group id", { group_name: "Updated group name" });
```
#### Delete group
```javascript
await yonoma.groups.delete("Group id");
```
## Tags
#### Create new tag
```javascript
await yonoma.tags.create({ tag_name: "New tag" });
```
#### Get list of tags
```javascript
await yonoma.tags.list();
```
#### Get one tag
```javascript
await yonoma.tags.retrieve("Tag id");
```
#### Update tag
```javascript
await yonoma.tags.update("Tag id", { tag_name: "Updated tag name" });
```
#### Delete tag
```javascript
await yonoma.tags.delete("Tag id");
```
## Contacts
#### Create new contact
```javascript
await yonoma.contacts.create("Group id", { 
  email: "email@example.com",
  status: "Subscribed" | "Unsubscribed",
  data: {
    fullName: string,
    phone: string,
    gender: string,
    address: string,
    city: string,
    state: string,
    country: string,
    zipcode: string,
  }
});
```
#### Update contact
```javascript
await yonoma.contacts.update("Group id", "Contact id", {
  status: "Subscribed" | "Unsubscribed",
});
```
#### Add tag to contact
```javascript
await yonoma.contacts.addTag("Contact id", {
  tag_id: "Tag id",
});
```
#### Remove tag from contact
```javascript
await yonoma.contacts.removeTag("Contact id", {
  tag_id: "Tag id",
});
```