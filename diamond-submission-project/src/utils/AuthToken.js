var myHeaders = new Headers();
myHeaders.append(
  "Cookie",
  "AWSALB=P1nPBiF2dImbaUawr/sv+9+g9B2c54A+/EfF4NnWOaHt9Z69XxSOzpldk2jr+UvXCppN+YwjD6LmBhLyrNCO69oXHgU9cYeT3P8Zj0XYSjwU4OHni4+W2xI6Me/n; AWSALBCORS=P1nPBiF2dImbaUawr/sv+9+g9B2c54A+/EfF4NnWOaHt9Z69XxSOzpldk2jr+UvXCppN+YwjD6LmBhLyrNCO69oXHgU9cYeT3P8Zj0XYSjwU4OHni4+W2xI6Me/n; AWSALBTG=NRw0Ai+z9W9CcCAuXfAvcF8NHzWIUM2F9Sx9Fpb+xDRfU4T2rFtfkUEnixlavP7FJimmWkIk4Ed/OMCyNmd06+mmUqudN7NWaBI08m9POXkJuakSlFo8i4BTMSlWeo4p+2kbB37Ppk4ResRHN0xBgBGd7Kv2gTj6G9y9S4FeLMp31Btirks=; AWSALBTGCORS=NRw0Ai+z9W9CcCAuXfAvcF8NHzWIUM2F9Sx9Fpb+xDRfU4T2rFtfkUEnixlavP7FJimmWkIk4Ed/OMCyNmd06+mmUqudN7NWaBI08m9POXkJuakSlFo8i4BTMSlWeo4p+2kbB37Ppk4ResRHN0xBgBGd7Kv2gTj6G9y9S4FeLMp31Btirks="
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

const token = ()=>fetch(
  "https://cutwise.com/api/oauth/v2/token?grant_type=password&username=demo&password=UqpY3q3yhLs2xFWt&client_id=10_4kcuxoitbkmc4gc4cwkggw04swg0co48ck0soco8w44w8s0c04&client_secret=2zmg3raap64gc8448co0wcg8kwkswswgscwc00ggco880wwk0k",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    return result.access_token;
  })
  .catch((error) => console.log("error", error));

// const getAccessToken = () => {
//   token.then((a) => {
//     console.log(a);
//     return a;
//   });
// };

async function AuthToken() {
  return await token();
}

export default AuthToken;
