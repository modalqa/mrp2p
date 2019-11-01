Feature: Modakrakyat P2P Lender Tarik Dana
  As Lender I Want To Login To Modalrakyat P2P and tarik dana

  Scenario: Tarik dana on modalrakyat
    Given lender is at p2p login page
    Then lender will see p2p login page
    When lender login as "ACTIVE_LENDER"
    Then lender will see lender dashboard page
    When lender click sidebar menu
    Then lender click tarik dana
    When lender input nominal
    Then lender click button konfirmasi