Feature: Modakrakyat P2P Lender Mutasi Dana
  As Lender I Want To Login To Modalrakyat P2P and lender can check mutasi dana

  Scenario: Mutasi dana on modalrakyat
    Given lender is at p2p login page
    Then lender will see p2p login page
    When lender login as "ACTIVE_LENDER"
    Then lender will see lender dashboard page
    When lender click sidebar menu
    Then lender click mutasi
    When lender click type bulanan
    Then lender set tanggal mutasi
    Then lender click lihat