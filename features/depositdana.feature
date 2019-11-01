Feature: Modakrakyat P2P Lender Deposit Dana
  As Lender I Want To Login To Modalrakyat P2P and lender can deposit dana

Scenario: Deposit dana on modalrakyat
    Given lender is at p2p login page
    Then lender will see p2p login page
    When lender login as "ACTIVE_LENDER"
    Then lender will see lender dashboard page
    When lender click sidebar menu
    Then lender click deposit dana
    Then lender can see deposit dana page