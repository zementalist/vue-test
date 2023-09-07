<template>
    <div id="profile">
        <Navbar></Navbar>
        <div class="container-fluid my-3">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>Self Awareness</h1>
                    <p class="lead mt-3">
                        Here, you'll know yourself better, understand others and rise your self awareness.
                        Learn how to develop your personality, solve relationships conflicts, communication best practices and handling different emotional states
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <InsightsCard
                    title="Personality Type"
                    description="Here, you'll know yourself better, understand others and rise your self awareness.
                        Learn how to develop your personality, solve relationships conflicts, communication best practices and handling different emotional states"
                    img="personality_type.jpg"
                    :self_related="true"
                    path="/personality/"
                    :user_id="user_id"
                    :friends_list="friends_list"
                    ></InsightsCard>
                </div>
                <div class="col-4">
                    <InsightsCard
                    title="Relationships Conflicts"
                    description="Here, you'll know yourself better, understand others and rise your self awareness.
                        Learn how to develop your personality, solve relationships conflicts, communication best practices and handling different emotional states"
                    img="relationship_conflicts.jpeg"
                    :self_related="false"
                    :path="'/relatinship_conflicts/' + 1 + '/'"
                    :user_id="user_id"
                    :friends_list="friends_list"
                    ></InsightsCard>
                </div>
                
                <div class="col-4">
                    <InsightsCard
                    title="Learning Style"
                    description="Here, you'll know yourself better, understand others and rise your self awareness.
                        Learn how to develop your personality, solve relationships conflicts, communication best practices and handling different emotional states"
                    img="learning_style.jpg"
                    :self_related="true"
                    path="/personality/"
                    :user_id="user_id"
                    :friends_list="friends_list"
                    ></InsightsCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar';
    import InsightsCard from '../components/InsightsCard.vue';
    export default {
        components: {
            Navbar,
            InsightsCard
        },
        data() {
            return {
                friends_list: null,
                user_id: 1
            }
        },
        created() {
            this.friends_list = [
                    {
                        name: 'Zeyad Wael',
                        avatar: 'https://img.icons8.com/color/100/000000/name.png',
                        id: 2
                    },
                    {
                        name: 'Eslam Osama',
                        avatar: 'https://img.icons8.com/color/100/000000/name.png',
                        id: 3
                    },
                    {
                        name: 'Khalid Elsayed',
                        avatar: 'https://img.icons8.com/color/100/000000/name.png',
                        id: 4
                    },
                    {
                        name: 'Zeyad Wael',
                        avatar: 'https://img.icons8.com/color/100/000000/name.png',
                        id: 5
                    },
                    {
                    name: 'Someone Else',
                        avatar: 'https://img.icons8.com/color/100/000000/name.png',
                        id: 5
                    },
                    {
                    name: 'Someone Else',
                        avatar: 'https://img.icons8.com/color/100/000000/name.png',
                        id: 5
                    },
                    {
                    name: 'Someone Else',
                        avatar: 'https://img.icons8.com/color/100/000000/name.png',
                        id: 5
                    },
                    ]
        }

    }
</script>

<style>

</style>