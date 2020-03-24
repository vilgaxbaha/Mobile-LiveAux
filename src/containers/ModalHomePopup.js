import React from 'react';
import {View, Modal, Image, StyleSheet} from 'react-native';
import {Text, Avatar, withTheme} from 'src/components';
import Button from 'src/containers/Button';
import Container from 'src/containers/Container';
import {black, white} from 'src/components/config/colors';
import {borderRadius, margin, padding} from 'src/components/config/spacing';

class ModalHomePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }
  render() {
    const {theme} = this.props;
    const {visible} = this.state;
    if (!visible) {
      return null;
    }
    return (
      <Modal visible={visible} transparent>
        <View style={styles.bgModal} />
        <View style={styles.viewContent}>
          <View style={styles.viewVertical} />
          <View
            style={[
              styles.content,
              {backgroundColor: theme.colors.listItemBg},
            ]}>
            <Image
              source={require('src/assets/images/mask.png')}
              resizeMode="contain"
            />
            <Container style={styles.info}>
              <Text h2 medium style={{marginBottom: 9}}></Text>
              <View style={styles.badge}>
                <Text h6 style={styles.textBadge}>DJ Albums</Text>
              </View>
              <Text style={styles.description}>
                New Dj  mixes, Music And Best Live Radio On LiveAux.
              </Text>
              <Button title={'Listen Now'} containerStyle={styles.button} onPress={() => console.log('click')}/>
            </Container>
          </View>
          <View style={styles.viewVertical}>
            <Avatar
              size={34}
              rounded
              icon={{name: 'x', color: white}}
              overlayContainerStyle={styles.iconClose}
              onPress={() => this.setState({visible: false})}
            />
          </View>
        </View>
      </Modal>
    )
  }
}
const styles = StyleSheet.create({
  bgModal: {
    flex: 1,
    backgroundColor: black,
    opacity: 0.7,
  },
  viewContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewVertical: {
    height: 54,
    justifyContent: 'flex-end',
  },
  content: {
    width: 280,
    borderRadius: borderRadius.large,
  },
  info: {
    marginTop: margin.small,
    marginBottom: margin.large + 4,
    alignItems: 'center',
  },
  badge: {
    height: 26,
    backgroundColor: 'red',
    borderRadius: 3,
    justifyContent: 'center',
    paddingHorizontal: padding.small,
    marginBottom: margin.large + 2,
  },
  textBadge: {
    textTransform: 'uppercase',
    color: white,
  },
  description: {
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: margin.big - 4,
    marginHorizontal: margin.small + 1,
  },
  button: {
    width: '100%',
  },
  iconClose: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: white,
  },
});

export default withTheme(ModalHomePopup);
