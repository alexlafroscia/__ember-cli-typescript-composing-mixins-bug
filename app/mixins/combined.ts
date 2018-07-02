import Mixin from "@ember/object/mixin";

import A from "./mixin-a";
import B from "./mixin-b";

export default Mixin.create(A, B, {
  combined: "combined"
});
