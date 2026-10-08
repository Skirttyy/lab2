import { Text, View, StyleSheet, Image, useWindowDimensions, SectionList } from "react-native";

export default function Post ({ username, location, postId, likes, description, comments, darkTheme }) {
    const { width } = useWindowDimensions();
    return (
        <View>
            <View style={postStyle.header}>
                <View style={postStyle.pfpContainer}>
                    <Image source={{uri: `https://i.pravatar.cc/120?u=${username}`}} style={postStyle.pfp}/>
                    <View>
                        <Text style={darkTheme ? { color: "#ffffff", fontWeight: 'bold'} : {fontWeight: 'bold'} }>{username}</Text>
                        location && <Text style={darkTheme ? { color: "#ffffff", fontSize: 12 } : {fontSize: 12}}>{location}</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center'}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>⋮</Text>
                </View>
            </View>
            <Image source={{ uri: `https://picsum.photos/seed/post${postId}/600/600`}} style={{ width: width, height: width}}/>
            <View style={postStyle.postAttributes}>
                <Text style={darkTheme ? { color: "#ffffff", fontSize: 20 } : {fontSize: 20 }}>❤️</Text>
                <Text style={darkTheme ? { color: "#ffffff", fontSize: 20 } : {fontSize: 20 }}>💬</Text>
                <Text style={darkTheme ? { color: "#ffffff", fontSize: 20 } : {fontSize: 20 }}>➤</Text>
            </View>
            <View style={{ paddingHorizontal: 15 }}>
                <Text style={darkTheme ? { color: "#ffffff", fontSize: 13, fontWeight: 'bold' } : {fontSize: 13, fontWeight: 'bold' }}>{likes} aprecieri</Text>
                <View style={{ flexDirection: 'row', gap: 4}}>
                    {description && <Text style={darkTheme ? { color: "#ffffff", fontWeight: 'bold'} : {fontWeight: 'bold'}}>{username}</Text>}
                    {description && <Text style={darkTheme ? { color: "#ffffff" } : null }>{description}</Text>}
                </View>
            </View>
            <View style={{ paddingHorizontal: 15, paddingBottom: 10 }}>
                <Text style={darkTheme ? { color: "#ffffff", fontWeight: 'bold' } : {fontWeight: 'bold'} }>Comentarii</Text>
                <SectionList 
                    sections={comments}
                    keyExtractor={( comment, index) => comment+index }
                    renderItem={ ( {item} ) => <View style={{ flexDirection: 'row', gap: 3 }}>
                        <Text style={darkTheme ? { color: "#ffffff", fontSize: 12, fontWeight: 'bold'} : {fontSize: 12, fontWeight: 'bold'}}>{item.username}</Text>
                        <Text style={darkTheme ? { color: "#ffffff", fontSize: 12} : {fontSize: 12}}>{item.text}</Text>
                    </View>}
                    renderSectionHeader={( {section} ) => <Text style={{ fontSize: 12, color: '#8b8989', fontWeight: 'bold'}}>{section.title}</Text>}
                    renderSectionFooter={({ section }) =>
                        section.data.length === 0 ? (
                            <Text style={{ fontSize: 12, color: '#8b8989' }}>niciun comentariu</Text>
                        ) : null
                    }
                />
            </View>
        </View>
    )
}

const postStyle = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    pfpContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    pfp: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    postAttributes: {
        flexDirection: 'row',
        gap: 20,
        paddingHorizontal: 15,
        paddingVertical: 5
    }
})