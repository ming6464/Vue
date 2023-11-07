const app = Vue.createApp({
  data() {
    return {
      teamName: "MyTeam",
      LeaveColors: [],
      EnterColors: [],
      ColorKeys: [],
    };
  },
  methods: {
    InputText(event) {
      this.teamName = event.target.value;
    },
    OnEnterMouse(color, id) {
      if (this.EnterColors.length > id) {
        this.EnterColors[id] = color;
        try {
          this.ColorKeys[id] = this.EnterColors[id];
        } catch (error) {
          console.log("OnEnterMouse push1 ", id);
          this.ColorKeys.push(this.EnterColors[id]);
        }
      } else {
        console.log(
          "OnEnterMouse push2 : ",
          id,
          " length : ",
          this.EnterColors.length
        );
        this.EnterColors.push(color);
        this.ColorKeys.push(this.EnterColors[id]);
      }
      console.log("OnEnterMouse ", this.EnterColors.length);
    },

    OnLeaveMouse(color, id) {
      if (this.LeaveColors.length > id) {
        this.EnterColors[id] = color;

        try {
          this.ColorKeys[id] = this.LeaveColors[id];
        } catch (error) {
          console.log("OnLeaveMouse push1 ", id);
          this.ColorKeys.push(this.LeaveColors[id]);
        }
      } else {
        console.log("OnLeaveMouse push2 ", id);
        this.LeaveColors.push(color);
        this.ColorKeys.push(this.LeaveColors[id]);
      }
      console.log("OnLeaveMouse ", this.LeaveColors.length);
    },
  },
});
