import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
actor {
var owner: Principal = Principal.fromText("dhahj-k55nz-744ow-t47cn-tztwp-bx3hn-e3ksp-vz6nz-d4bpp-ibj5z-nqe");
var totalSupply: Nat = 1000000000;
var symbol: Text = "DANG";
//ledger creation
var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal,Principal.hash);
balances.put(owner, totalSupply);

public query func balanceOf( who:Principal): async Nat{
  //options adress ?Nat
  let balance : Nat = switch (balances.get(who)) {
  case null 0;
  case (?result) result;
};
return balance;

};

};