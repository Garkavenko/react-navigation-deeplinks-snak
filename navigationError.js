/*function Test1() {
  const navigation = useNavigation();

  return (
    <View>
      <Text
        onPress={() => {
          console.log('test1');
        }}>
        CONSOLE
      </Text>
      <Text
        onPress={() => {
          navigation.navigate({ name: 'test2' });
        }}>
        To test 2
      </Text>
    </View>
  );
}

function Test2() {
  const [r, sr] = useState(3);
  console.log(r);

  if (r === 1) {
    return (
      <View>
        <Spinner />
        <Text
          onPress={async () => {
            setTimeout(() => {
              sr(1);
            }, 10);
            setTimeout(() => {
              sr(2);
            }, 10);

          }}>
          PRESS
        </Text>
      </View>
    );
  }

  if (r === 2) {
    return (
      <GlobalError
        onButtonPress={async () => {
          setTimeout(() => {
            sr(2);
          }, 10);
          setTimeout(() => {
            sr(3);
          }, 10);


        }}
      />
    );
  }

  return (
    <View>
      <Text
        onPress={async () => {
          setTimeout(() => {
            sr(2);
          }, 10);
          setTimeout(() => {
            sr(1);
          }, 10);
        }}>
        PRESS
      </Text>
    </View>
  );
}

function AppNavigation() {
  return (
    <Stack.Navigator detachInactiveScreens={false}>
      <Stack.Screen
        name="test1"
        component={Test1}
      />

      <Stack.Screen
        name="test2"
        component={Test2}
      />
    </Stack.Navigator>
  );
}*/
