export const itemStyle = (Columns: boolean, item: number) => {

    switch (Columns) {
      case true:
        switch (item) {
          case 1:
            return { borderTopLeftRadius: 30 };
          case 3:
            return { borderTopRightRadius: 30 };
          case 4:
            return { borderBottomLeftRadius: 30 };
          case 6:
            return { borderBottomRightRadius: 30 };

          // default:
          //   break;
        }
        break;
      case false:
        switch (item) {
          case 1:
            return { borderTopLeftRadius: 30 };
          case 2:
            return { borderTopRightRadius: 30 };
          case 5:
            return { borderBottomLeftRadius: 30 };
          case 6:
            return { borderBottomRightRadius: 30 };

          // default:
          //   break;
        }
        break;
    }
  };