package com.jinacryptocoins;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // here

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    SplashScreen.show(this); // here
    return "JinaCryptoCoins";
  }
}
