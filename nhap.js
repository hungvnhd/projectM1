btn.onclick = function () {
  let value = input.value;
  if (value !== "") {
    let li = document.createElement("li");
    li.classList.add("list-item");

    li.innerHTML = `
      <div class="status-li">

                <div class="status-li-1">
                    <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9wS349MtvsIAX8_uaey&_nc_ht=scontent.fhan3-1.fna&oh=00_AT_p3DShKHbY9Yh-U9XXB5buJNqGo10ODCzCPubdvBfORw&oe=632A4E56"
                        alt="">
                    <div>
                        <h5>Mark Zuckerberg</h5>
                        <span><i class="fa-solid fa-earth-americas"></i></span>
                    </div>
                    <button class="delete-btn"><i class="fa-solid fa-xmark"></i></button>

                </div>
                <div class="status-li-content">${value}</div>



                <div class="status-li-icon">
                    <div><i class="fa-solid fa-thumbs-up"></i> Like</div>
                    <div><i class="fa-solid fa-message"></i> Comment</div>
                    <div><i class="fa-solid fa-share"></i> Share</div>
                </div>
                <div class="status-li-comment">
                    <img src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/79515135_10111007623880301_5111576226921709568_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9wS349MtvsIAX8_uaey&_nc_ht=scontent.fhan3-1.fna&oh=00_AT_p3DShKHbY9Yh-U9XXB5buJNqGo10ODCzCPubdvBfORw&oe=632A4E56"
                        alt="">
                    <input type="text" placeholder="Write a comment...">
                </div>





            </div>`;

    let ul = document.getElementById("list");
    ul.appendChild(li);

    input.value = "";
  }
};

let list = document.getElementById("list");

list.onclick = function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.parentElement.remove();
  }
};

<script type="text/javascript">
  document.getElementById("myButton").onclick = function (){" "}
  {(location.href = "C:UsersGS65DesktopprojectTrang ca nhanprofile-page.html")};
</script>;
