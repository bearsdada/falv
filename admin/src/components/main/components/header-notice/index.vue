<template>
  <div class="header-notice">
    <Dropdown @on-click="jumpUrl" :transfer="true">
      <div>
        <Badge dot :count="needList.length ? needList.length : 0">
          <Icon type="ios-notifications-outline" size="26"></Icon>
        </Badge>
      </div>
      <DropdownMenu slot="list">
        <DropdownItem :name="item.url" v-for="(item, index) in needList" :key="index"
          ><Icon :type="item.icon" :style="'background-color:' + item.iconColor" class="iconImg" />{{
            item.title
          }}</DropdownItem
        >
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<style lang="less">
.header-notice {
  margin-right: 30px;
}
.header-notice .ivu-dropdown-item {
  font-size: 14px !important;
  font-weight: 400;
  line-height: 22px;
  color: #515a6e;
}
.header-notice .ivu-dropdown-item ~ .ivu-dropdown-item {
  border-top: 1px solid #e8eaec;
}
.header-notice .iconImg {
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 50%;
  color: #fff;
  font-size: 18px;
  margin-right: 10px;
  vertical-align: middle;
}
.header-notice .ivu-dropdown {
  height: 30px;
  line-height: 30px;
}
.header-notice .ivu-dropdown .ivu-select-dropdown {
  margin-top: 22px;
}
.header-notice .ivu-badge-dot {
  z-index: 0 !important;
}
</style>
<script>
let newOrderAudioLink = new Audio(require('@/assets/video/newOrderAudioLink.mp3'));
import { jnoticeRequest } from '@/api/common';
import { adminSocket } from '@/libs/socket';
import { getCookies, removeCookies, setCookies } from '@/libs/util';
export default {
  name: 'User',
  data() {
    return {
      needList: [],
      newOrderAudioLink: null,
    };
  },
  mounted() {
    this.getNotict();
    this.newOrderAudioLink = newOrderAudioLink;
    adminSocket.then((ws) => {
      ws.send({
        type: 'login',
        data: getCookies('token'),
      });
      let that = this;
      ws.$on('ADMIN_NEW_PUSH', function (data) {
        that.getNotict();
      });

      ws.$on('NEW_ORDER', function (data) {
        that.$Notice.info({
          title: '?????????',
          duration: 8,
          desc: '????????????????????????,ID???(' + data.order_id + '),???????????????',
        });
        if (this.newOrderAudioLink) this.newOrderAudioLink.play();
        that.messageList.push({
          title: '???????????????',
          icon: 'md-bulb',
          iconColor: '#87d068',
          time: 0,
          read: 0,
        });
      });
      ws.$on('NEW_REFUND_ORDER', function (data) {
        that.$Notice.warning({
          title: '??????????????????',
          duration: 8,
          desc: '??????????????????????????????,ID???(' + data.order_id + '),???????????????',
        });
        if (window.newOrderAudioLink) this.newOrderAudioLink.play();
        that.messageList.push({
          title: '??????????????????',
          icon: 'md-information',
          iconColor: '#fe5c57',
          time: 0,
          read: 0,
        });
      });
      ws.$on('WITHDRAW', function (data) {
        that.$Notice.warning({
          title: '????????????',
          duration: 8,
          desc: '?????????????????????,?????????(' + data.id + '),???????????????',
        });
        that.messageList.push({
          title: '??????????????????',
          icon: 'md-people',
          iconColor: '#f06292',
          time: 0,
          read: 0,
        });
      });
      ws.$on('STORE_STOCK', function (data) {
        that.$Notice.warning({
          title: '????????????',
          duration: 8,
          desc: '??????ID???(' + data.id + ')??????????????????,???????????????~',
        });
        that.messageList.push({
          title: '????????????',
          icon: 'md-information',
          iconColor: '#fe5c57',
          time: 0,
          read: 0,
        });
      });
      ws.$on('PAY_SMS_SUCCESS', function (data) {
        that.$Notice.info({
          title: '??????????????????',
          duration: 8,
          desc: '???????????????' + data.price + '????????????' + data.number + '?????????',
        });
        that.messageList.push({
          title: '??????????????????',
          icon: 'md-bulb',
          iconColor: '#87d068',
          time: 0,
          read: 0,
        });
      });
    });
  },
  methods: {
    getNotict() {
      jnoticeRequest()
        .then((res) => {
          this.needList = res.data || [];
        })
        .catch(() => {});
    },
    jumpUrl(url) {
      this.$router.push({ path: url });
    },
  },
};
</script>
