export default {
  percent: state => {
    if (state.step.length >= 1) {
      return Math.round(
        (state.step.length /
          state.step.reduce((a, b) => a + (b["isFinish"] || 0), 0)) *
          100
      );
    }
  }
};
