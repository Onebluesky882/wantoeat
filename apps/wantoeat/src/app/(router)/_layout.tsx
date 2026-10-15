import { NativeTabs } from "expo-router/build/native-tabs";

const _layout = () => {
  return (
    <NativeTabs tintColor="#04C755">
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="Ranking/index">
        <NativeTabs.Trigger.Icon sf="bubble.right.circle" md="foot_bones" />
        <NativeTabs.Trigger.Label>Ranking</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="Social/index">
        <NativeTabs.Trigger.Icon
          sf="badge.plus.radiowaves.forward"
          md="foot_bones"
        />
        <NativeTabs.Trigger.Label>Social</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="Profile/index">
        <NativeTabs.Trigger.Icon sf="person.crop.circle" md="person" />
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default _layout;
