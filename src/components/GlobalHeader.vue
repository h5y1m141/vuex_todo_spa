<template>
  <div class="GlobalHeader">
    <div class="GlobalHeader-inner">
      <h1 class="GlobalHeader-title">
        SPAサンプル
      </h1>
      <div class="GlobalHeader-menu">
        <span class="GlobalHeader-user">
          <img src="../assets/user.svg" width="16" height="16" />
          <span>ユーザー名</span>
        </span>
      </div>
    </div>
  </div>
</template>
<style>
.GlobalHeader {
  background-color: #EFEFEF;
  border-bottom: 1px solid #CCC;
  position: relative;
  padding: 0 15px;
}

.GlobalHeader-title {
  margin: 0;
  padding: 0;
}

.GlobalHeader-title > a {
  font-size: 18px;
  font-weight: bold;
  color:#333;
  text-decoration: none;
  vertical-align: middle;
}

.GlobalHeader-menu {
  position: absolute;
  right: 15px;
  top: 12px;
}

.GlobalHeader-user {
  display: inline-block;
  font-size: 13px;
  margin-right: 10px;
  position: relative;
  top: -2px;
}

.GlobalHeader-user > img {
  margin-right: 5px;
}

.GlobalHeader-user > img,
.GlobalHeader-user > span {
  vertical-align: middle;
}

.GlobalHeader-menuItem {
  display: inline-block;
  margin: 0 8px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
}

.GlobalHeader-menuItem:hover {
  color: #00C;
}
</style>
